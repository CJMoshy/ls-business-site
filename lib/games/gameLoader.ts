type WIN_GAME_FUNC = () => void;
declare global {
  interface Window {
    run: () => WIN_GAME_FUNC[];
  }
}

interface GameFile {
  name: string;
  path: string;
}

interface Game {
  index: number;
  name: string;
  running: boolean;
  script: HTMLElement | undefined;
  _init: () => void;
  _end: () => void;
  load_game: () => void;
  unload_game: () => void;
}

/**
 * @param {string} _name pass this to addGame as the game key
 * @param {string} _path pass this to addGame as path to load
 */
export default class GameLoader {
  private paths: GameFile[];
  private games: Game[];
  private gameCount: number;

  static gameLoader: GameLoader;

  public static get instance(): GameLoader {
    if (!GameLoader.gameLoader) {
      GameLoader.gameLoader = new GameLoader([
        {
          name: "Ice Cream Game",
          path: "/bundles/iceCream/bundle.js",
        },
      ]);
    }
    return GameLoader.gameLoader;
  }

  /**
   * @param {GameFile[]} _paths array of gamefiles for each game
   */
  private constructor(_paths: GameFile[]) {
    this.paths = _paths;
    this.games = [];
    this.gameCount = 0;
  }

  private incrementGameCount(): void {
    this.gameCount += 1;
  }

  /**
   *
   * @param {string} src
   * @return {Promise<HTMLElement>}
   */
  private loadScript(src: string): Promise<HTMLElement> {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Failed to load script ${src}`));
      document.body.appendChild(script);
    });
  }

  private async addGame(_name: string, _path: string) {
    if (this.games.find((g) => g.name === _name)) {
      console.log(`script ${_name} has already been initialized`);
      return;
    }
    try {
      const _script = await this.loadScript(_path);
      const [init, end] = window.run();
      const game: Game = {
        index: this.gameCount,
        name: _name,
        running: false,
        script: _script,
        _init: init,
        _end: end,
        load_game: () => {
          console.log(`loading game ${game.name}`);
          game.running = true;
          game._init();
        },
        unload_game: () => {
          console.log(`unloading game ${game.name}`);
          game.running = false;
          game._end();
        },
      };
      this.games.push(game);
      this.incrementGameCount();
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * run one game
   * @param {string} _name name of the game to play
   * @return {boolean}
   */
  public async runOne(_name: string) {
    const exists = this.paths.find((p) => p.name === _name);
    if (exists === undefined) return;
    await this.addGame(_name, exists.path);
    const game = this.games.find((game) => game.name === _name);
    if (!game) {
      return;
    }
    if (game.running) return;
    game.load_game();
  }

  /**
   * end one game
   * @param {string} _name
   * @return {boolean}
   */
  public endOne(_name: string) {
    const game = this.games.find((game) => game.name === _name);
    if (!game) return;
    game.unload_game();
  }
}

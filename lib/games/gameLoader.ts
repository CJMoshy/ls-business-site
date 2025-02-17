/**
 * init and end start and end the game
 */
type GAME_CONTROLLER_FUNC = [() => void, () => void];

declare global {
  interface Window {
    run: () => GAME_CONTROLLER_FUNC;
  }
}

interface GameFile {
  name: string;
  path: string;
}

interface Game {
  name: string;
  running: boolean;
  _init_: () => void;
  _end_: () => void;
  loadGame: () => void;
  unloadGame: () => void;
}

/**
 * @param {string} _name pass this to addGame as the game key
 * @param {string} _path pass this to addGame as path to load
 */
export default class GameLoader {
  private paths: GameFile[];
  private games: Game[];

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

    const game = this.games.find((game) => game.name === _name)!;
    if (game.running) return;
    console.log("loading");
    game.loadGame();
  }

  /**
   * end one game
   * @param {string} _name
   * @return {boolean}
   */
  public endOne(_name: string) {
    const game = this.games.find((game) => game.name === _name);
    if (game === undefined) return;
    game.unloadGame();
  }

  /**
   * End any running games
   */
  public endAny() {
    this.games
      .filter((game) => game.running === true)
      .forEach((game) => {
        game.unloadGame();
        document.dispatchEvent(
          new CustomEvent<string>("unload-game", { detail: game.name })
        );
      });
  }

  /**
   *
   * @param _name
   * @param _path
   * @returns
   */
  private async addGame(_name: string, _path: string) {
    if (this.games.find((g) => g.name === _name)) {
      console.log(`script ${_name} has already been initialized`);
      return;
    }
    try {
      // load the script
      await this.loadScript(_path);
      const [init, end] = window.run(); // scripts will define an init and end function

      const game: Game = {
        name: _name,
        running: false,
        _init_: init,
        _end_: end,
        loadGame: () => {
          console.log(`loading game ${game.name}`);
          game.running = true;
          game._init_();
        },
        unloadGame: () => {
          console.log(`unloading game ${game.name}`);
          game.running = false;
          game._end_();
        },
      };

      this.games.push(game);
    } catch (e) {
      console.log(e);
    }
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
      script.onerror = () => {
        document.body.removeChild(script); // prob not necessary because my scripts run
        reject(new Error(`Failed to load script ${src}`));
      };
      document.body.appendChild(script);
    });
  }
}

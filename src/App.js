const BridgeGame = require('./BridgeGame.js');
const { COMMAND } = require('./constructor.js');
const InputView = require('./InputView.js');
const OutputView = require('./OutputView.js');

class App {
  #game

  constructor() {
    this.#game = new BridgeGame();
  }

  initBridge(size) {
    this.#game.setBridge(size);
    InputView.readMoving((movement) => this.runGame(movement));
  }

  runGame(movement) {
    const result = this.#game.move(movement);
    OutputView.printMap(result.map);
    if (result.isGameEnd) {
      return OutputView.printResult(result);
    }
    if (result.isCorrect) {
      return InputView.readMoving(movement => this.runGame(movement));
    }
    return this.checkRetry(result);
  }

  checkRetry(result) {
    InputView.readGameCommand((command) => {
      if (command === COMMAND.QUIT) {
        return OutputView.printResult(result)
      }
      return this.retryGame();
    });
  }

  retryGame() {
    this.#game.retry();
    return InputView.readMoving(movement => this.runGame(movement));
  }

  play() {
    InputView.readBridgeSize((size) => this.initBridge(size));
  }
}

module.exports = App;

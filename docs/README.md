## 🚀 기능 요구 사항
- [x] 다리의 길이를 숫자로 입력받는다.
- [x] 다리를 생성한다. 
  - [x] 위 칸과 아래 칸 중 건널 수 있는 칸은 0과 1 중 무작위 값을 이용해서 정한다.
  - [x] 무작위 값이 0인 경우 아래 칸, 1인 경우 위 칸이 건널 수 있는 칸이 된다.
  - [x] 위 칸을 건널 수 있는 경우 U, 아래 칸을 건널 수 있는 경우 D값으로 나타낸다.
- [x] 다리가 생성되면 플레이어가 이동할 칸을 선택한다.
  - [x] 이동할 때 위 칸은 대문자 U, 아래 칸은 대문자 D를 입력한다.
  - [x] 이동한 칸을 건널 수 있다면 O로 표시한다. 건널 수 없다면 X로 표시한다.
- [x] 다리를 끝까지 건너면 게임이 종료된다.
- [x] 다리를 건너다 실패하면 게임을 재시작(R)하거나 종료(Q)할 수 있다.
  - [x] 재시작해도 처음에 만든 다리로 재사용한다.
- [x] 게임 결과의 총 시도한 횟수는 첫 시도를 포함해 게임을 종료할 때까지 시도한 횟수를 나타낸다.

## 💣 예외처리
- [x] 다리 길이가 숫자가 아니면 예외처리한다.
  - [x] 3~20사이 숫자여야 한다.
- [x] 사용자 이동이 대문자 U와 D가 아니면 예외처리한다.
- [x] 재시작과 종료 선택은 대문자 R과 Q가 아니면 예외처리한다.
- [x] 위 경우들은 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

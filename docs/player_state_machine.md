# Player State Machine（Day 2）

## States
- `Idle`
- `Run`
- `Jump`
- `Fall`
- `Dash`
- `Hurt`
- `Interact`

## Transition Rules（簡版）
- Idle -> Run：水平輸入絕對值 > 0.15
- Run -> Idle：水平輸入絕對值 <= 0.15
- Idle/Run -> Jump：Jump pressed 且（Grounded 或 Coyote）
- Jump -> Fall：垂直速度 > 0
- Fall -> Idle/Run：Grounded = true
- Any -> Dash：Dash pressed 且 cooldown ready 且 not Hurt
- Dash -> Fall/Run：Dash duration 結束
- Any -> Hurt：TakeDamage event
- Hurt -> Fall/Run：Hurt timeout 結束
- Any -> Interact：Interact pressed 且 near interactable
- Interact -> Idle：interaction complete

## 不可中斷規則
- Hurt 前 0.2 秒不可被其他狀態打斷。
- Dash 前 0.08 秒不可進入 Interact。

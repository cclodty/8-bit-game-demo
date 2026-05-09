# Input Map（Day 2）

## Keyboard
- Move Left: `A` / `Left Arrow`
- Move Right: `D` / `Right Arrow`
- Jump: `Space` / `K`
- Dash: `J` / `Left Shift`
- Interact: `E`
- Pause: `Esc`

## Gamepad
- Move: `Left Stick / D-Pad`
- Jump: `A (Xbox) / Cross (PS)`
- Dash: `X (Xbox) / Square (PS)`
- Interact: `Y (Xbox) / Triangle (PS)`
- Pause: `Start / Options`

## 輸入優先規則
1. 同幀 Jump 與 Dash 同時觸發時，優先 Jump。
2. 暫停狀態下只接受 Pause（恢復）與 UI 導航。
3. 對話狀態下禁用 Dash。

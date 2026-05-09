# Mechanic Spec — 壓板 / 拉桿 / 限時門（Day 4）

## 共通事件格式
- Input: `player_enter | player_exit | interact`
- Condition: `is_powered | is_locked | cooldown_ok`
- Output: `open_gate | close_gate | emit_signal`

## 壓板（Pressure Plate）
- 觸發方式：玩家或可推動箱子站上。
- 延遲：`0.0s`（即時）
- 離開後：`0.35s` 自動復位
- 信號：`plate_active = true/false`

## 拉桿（Lever）
- 觸發方式：Interact
- 切換模式：Toggle（On/Off）
- 互斥：可設定單次啟動（One-shot）
- 冷卻：`0.2s`

## 限時門（Timed Gate）
- 開門條件：接收到 `open_gate`
- 開啟時長：`4.0s`
- 關門警示：關門前 `0.8s` 閃爍提示
- 被阻擋時行為：延後關門 `0.5s`，最多重試 2 次

## 驗收案例
1. 壓板啟動 -> 門開 -> 玩家離開壓板 0.35s 後門關。
2. 拉桿切到 ON 後，門維持開啟直到再次拉桿。
3. 限時門在 4 秒到期後正常關閉且可重複觸發。

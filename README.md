# ahphashop III

## 專案說明
使用react框架,製作購物流程的頁面，畫面如下：
![購物步驟1](https://github.com/shineni1031/alphashopIII/blob/main/src/assets/ALPHA%20Shop%20-%20Address.png)  
![購物步驟2](https://github.com/shineni1031/alphashopIII/blob/main/src/assets/ALPHA%20Shop%20-%20Shipping.png)
![購物步驟3](https://github.com/shineni1031/alphashopIII/blob/main/src/assets/ALPHA%20Shop%20-%20Checkout.png)

## 開發進度
### 步驟1.完成畫面切版,包含左半邊結帳表單與右半邊購物車  
參考檔案
- [html](https://github.com/erase2004/ALPHA-Shop)
- [figma設計稿](https://www.figma.com/file/ST88T0TqGp9C3gSJFKjhJt/(archived)--Capstone-ALPHACast)
- [SVG檔案](https://github.com/ALPHACamp/alpha-shop/tree/main/public/icons)

### 步驟2.實作Cart Component
- [x] 在 Cart.jsx 使用下方的 data 當作 initial 資料，並使用迴圈將 Cart 裡的 Item render 出來
```
[
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]
```
### 步驟3.實作StepProgressBar 和 StepController 二個 Component，並滿足以下要點：
- [x] 在 App.jsx 使用 useState 儲存目前的 step，並透過 props 使用在 ProgressControl 的按鈕來切換目前的 step。  
- [x] 運用條件式渲染判斷當前 step，step 頁面只顯示當前狀態的 form。  
- [x] 特別注意 UI 的行為，如果是在 Step1 會看不到上一步的按鈕；如果是在 Step3，下一步的文字要更換為「確認下單」。  

### 步驟4.請實作Cart Component。並滿足以下要點：
- [x] Item 中的新增與減少按鈕功能要能正常使用，並在小計顯示正確總金額。
- [x] 商品旁邊的金額為商品單價，購物車下方的小計為商品金額加總。

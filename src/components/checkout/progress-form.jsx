
import { useState } from 'react';
import './progress-form.css'

const countries = [
  {id: "1",abbre: "KLU",name: "基隆市"},
  {id: "2",abbre: "TPH",name: "新北市"},
  {id: "3",abbre: "TPE",name: "臺北市"},
  {id: "4",abbre: "TYC",name: "桃園市"},
  {id: "5",abbre: "HSH",name: "新竹縣"},
  {id: "6",abbre: "HSC",name: "新竹市"},
  {id: "7",abbre: "MAC",name: "苗栗市"},
  {id: "8",abbre: "MAL",name: "苗栗縣"},
  {id: "9",abbre: "TXG",name: "臺中市"},
  {id: "10",abbre: "CWH",name: "彰化縣"},
  {id: "11",abbre: "CWS",name: "彰化市"},
  {id: "12",abbre: "NTC",name: "南投市"},
  {id: "13",abbre: "NTO",name: "南投縣"},
  {id: "14",abbre: "YLH",name: "雲林縣"},
  {id: "15",abbre: "CHY",name: "嘉義縣"},
  {id: "16",abbre: "CYI",name: "嘉義市"},
  {id: "17",abbre: "TNN",name: "臺南市"},
  {id: "18",abbre: "KHH",name: "高雄市"},
  {id: "19",abbre: "IUH",name: "屏東縣"},
  {id: "20",abbre: "PTS",name: "屏東市"},
  {id: "21",abbre: "ILN",name: "宜蘭縣"},
  {id: "22",abbre: "ILC",name: "宜蘭市"},
  {id: "23",abbre: "HWA",name: "花蓮縣"},
  {id: "24",abbre: "HWC",name: "花蓮市"},
  {id: "25",abbre: "TTC",name: "臺東市"},
  {id: "26",abbre: "TTT",name: "臺東縣"},
  {id: "27",abbre: "PEH",name: "澎湖縣"},
  {id: "28",abbre: "KMN",name: "金門縣"},
  {id: "29",abbre: "LNN",name: "連江縣"},
]

function CountryOptionGenerator(){
  const countryOptions = countries.map(country =>
    <option key={country.id} value={country.abbre}>{country.name}</option>);
  return (
    <>
    {countryOptions}
    </>
  )
}

export default function ProgressForm({status}) {
  function Step1() {
    return (
      <section className='form-section'>
      <div className='progress-title'>寄送地址</div>
        <div className='form-row'>
          <div className='form-2'>
            <label>稱謂</label>
            <select name="" id="">
              <option value="" disabled selected>請選擇稱謂</option>
              <option value="mr">先生</option>
              <option value="mrs">女士</option>
              <option value="mis">小姐</option>
            </select>
          </div>    
          <div className='form-4'>
            <label>姓名</label>
            <input type="text" placeholder='請輸入姓名'></input>
          </div>
        </div>
            
        <div className='form-row'>
          <div className='form-3'>
            <label>電話</label>
            <input type="text" placeholder='請輸入行動電話'></input>
          </div>
          <div className='form-3'>
            <label>Email</label>
            <input type="text" placeholder='請輸入電子郵件'></input>
          </div>
        </div>

        <div className='form-row'>
          <div className='form-2'>
            <label>縣市</label>
            <select name="country" id="country">
              <option value="" disabled selected>請選擇縣市</option>
              <CountryOptionGenerator />
            </select>
          </div>
          <div className='form-4'>
            <label>地址</label>
            <input type="text" placeholder='請輸入地址'></input>
          </div>
        </div>
    </section>
    )
  }

  function Step2 () {
    const [shippingMethod, setShippingMethod] = useState('general')
    function Shipping ({ method, dayOfShipping, shippingFee, value }) {
    return (
      <>
      {shippingMethod.value === value ? (<div className='form-radio actived' onClick={(e) => handleMethodClick(e, value)}>
        <input type="radio" name="shipping-method" value={value} checked></input>
        <label><span>{method}</span><p>{dayOfShipping}</p><p className="shipping-price">{shippingFee}</p></label>
      </div>) : (<div className='form-radio' onClick={(e) => handleMethodClick(e, value)}>
        <input type="radio" name="shipping-method" value={value}></input>
        <label><span>{method}</span><p>{dayOfShipping}</p><p className="shipping-price">{shippingFee}</p></label>
      </div>)}
      </>
    )
  }

  function handleMethodClick(e, value) {
    setShippingMethod({value})
  }
  
    return (
      <section className='form-section'>
      <div className='progress-title'>運送方式</div>
      <Shipping method="標準運送" dayOfShipping="約 3~7 個工作天" shippingFee="免費" value="general" />
      <Shipping method="DHL貨運" dayOfShipping="48 小時送達" shippingFee="$500" value="dhl" />
    </section>
    )
  }

  

  

  function Step3 () {
    return (<section className='form-section'>
      <div className='progress-title'>付款資訊</div>
        <div className="form-row">
          <div className="form-4">
            <label>持卡人姓名</label>
            <input type="text" placeholder='John Doe'></input>
          </div>
          <div className="form-2"></div>
        </div>
        <div className="form-row">
          <div className="form-4">
            <label>卡號</label>
            <input type="text" placeholder='1111 2222 3333 4444'></input>
          </div>
          <div className="form-2"></div>
        </div>
        <div className="form-row">
          <div className="form-3">
            <label>有效期限</label>
            <input type="text" placeholder='MM/YY'></input>
          </div>
          <div className="form-3">
            <label>CVC/CCV</label>
            <input type="text" placeholder='123'></input>
          </div>
        </div>
    </section>)      
  }
  
  return (
    <>
    <form>
      {status === 1 && <Step1 />}
      {status === 2 && <Step2 />}
      {status === 3 && <Step3 />}
    </form>
    </>
  )
}
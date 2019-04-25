import { Component, State, Prop, Watch } from "@stencil/core";
import { AV_API_KEY } from './../global/global';

@Component({
  tag: "uc-stock-price",
  styleUrl: "./stock-price.css",
  shadow: true
})
export class StockPrice {
  @State() fetchedPrice: number;
  @State() stockUserInput : string;
  @State() stockInputValid : boolean = false;
  @State() errorMsg : string;
  @Prop() stockSymbol: any;

  @Watch('stockSymbol')
  onStockSymbolChange(newVal : string, oldVal:string) {
    if(newVal !== oldVal){
      this.fetchStockPrice(newVal);
    }
  }
  // @Element() el: HTMLElement;
  stockInput : HTMLInputElement;

  componentDidLoad() {
    if(this.stockSymbol){
      this.stockUserInput = this.stockSymbol;
      this.fetchStockPrice(this.stockSymbol)
    }
  }

  onInputChange(event : Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;
    if(this.stockUserInput.trim() !== ''){
      this.stockInputValid = true;
    }else{
      this.stockInputValid = false;
    }
  }

  onFetchStockPrice(event: Event) {
    event.preventDefault();
    // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
    const stockSymbol = this.stockInput.value;
    this.fetchStockPrice(stockSymbol);
  }

  fetchStockPrice(stockSymbol){
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
    .then(res => {
      return res.json();
    })
    .then(parseRes => {
      if(!parseRes['Global Quote']['05. price']){
        throw new Error('Invalid Symbol!');
      }
      this.errorMsg = null;
      this.fetchedPrice = +parseRes['Global Quote']['05. price']
      console.log(this.fetchedPrice);
    })
    .catch(err => {
      this.errorMsg = err.message;
    })
  }

  render() {
    let dataContent = <p>Please enter symbol!</p>
    if(this.errorMsg){
      dataContent = <p>{this.errorMsg}</p>
    }
    if(this.fetchedPrice){
      dataContent = <p>Price : {this.fetchedPrice}</p>
    }
    return [
      <form class="form-wrapper" onSubmit={this.onFetchStockPrice.bind(this)}>
        <input type="text" id="stock-symbol"
        ref={el => this.stockInput = el}
        onInput={this.onInputChange.bind(this)}
        value={this.stockUserInput}/>
        <button type="submit" disabled={!this.stockInputValid}>Fetch</button>
      </form>,
      <div class="price-txt">
        {dataContent}
      </div>
    ];
  }
}

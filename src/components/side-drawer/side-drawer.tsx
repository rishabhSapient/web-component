import { Component, Prop, State, Method } from "@stencil/core";

@Component({
  tag: "uc-side-drawer",
  styleUrl: "./side-drawer.css",
  shadow: true
})
export class SideDrawer {
  @State() showContact:boolean = false;
  @Prop({reflectToAttr: true}) title: string;
  @Prop({reflectToAttr: true, mutable : true}) opened: boolean;

  @Method() open(){
    this.opened = true;
  }

  onCloseDrawer() {
    this.opened = false;
  }

  navChange(data: string){
    console.log(data);
    this.showContact = data === 'contact';
  }

  render() {
    let mainContent = <slot />;
    if(this.showContact){
      mainContent = (
        <div id="contact-information">
        <h2>Contact Information</h2>
        <p>You can reach us via mobile or email.</p>
        <ul>
          <li>Phone: 9090909090</li>
          <li>
            <a href="mailto:someone@somedomain.com">someone@somedomain.com</a>
          </li>
        </ul>
        </div>
      )
    }
    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>x</button>
        </header>
        <section id="navBar">
          <button class={!this.showContact ? 'active' : ''} onClick={this.navChange.bind(this, 'nav')}>Navigation</button>
          <button class={this.showContact ? 'active' : ''} onClick={this.navChange.bind(this, 'contact')}>Contact</button>
        </section>
        <main>
          {mainContent}
        </main>
      </aside>
    );
  }
}

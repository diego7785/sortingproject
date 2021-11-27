/*
import React, { Component } from "react";
import "./styles.css";

export default class Animation extends Component {
  constructor() {
    super();
    this.container = React.createRef();
    this.block = React.createRef();
  }

  componentDidMount() {
    this.generateBlocks();
    this.bubbleSort();
  }

  generateBlocks(num = 14) {
    for (let i = 0; i < num; i += 1) {
      const value = Math.floor(Math.random() * 100);

      const block = document.createElement("div");
      block.classList.add("block");
      block.style.height = `${value * 3}px`;
      block.style.transform = `translateX(${i * 30}px)`;

      const blockLabel = document.createElement("label");
      blockLabel.classList.add("block__id");
      blockLabel.innerHTML = value;
      blockLabel.style.opacity='0'

      block.appendChild(blockLabel);
      this.container.current.appendChild(block);
    }
  }

  swap(el1, el2) {
    return new Promise((resolve) => {
      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);

      const transform1 = style1.getPropertyValue("transform");
      const transform2 = style2.getPropertyValue("transform");

      el1.style.transform = transform2;
      el2.style.transform = transform1;

      // Wait for the transition to end!
      window.requestAnimationFrame(function () {
        setTimeout(() => {
          this.container.current.insertBefore(el2, el1);
          resolve();
        }, 250);
      });
    });
  }

  async bubbleSort(delay = 100) {

    let blocks = this.container.current.childNodes;
    //console.log(_blocks)
    //let blocks = document.querySelectorAll(".block");
    //console.log(this.block)
    for (let i = 0; i < blocks.length - 1; i += 1) {
      for (let j = 0; j < blocks.length - i - 1; j += 1) {
        blocks[j].style.backgroundColor = "#FF4949";
        blocks[j + 1].style.backgroundColor = "#FF4949";
  
        await new Promise(resolve =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
        
        const value1 = Number(blocks[j].innerHTML);
        const value2 = Number(blocks[j + 1].innerHTML);
  
        if (value1 > value2) {
          await this.swap(blocks[j], blocks[j + 1]);
          blocks = this.container.current.childNodes;
        }
  
        blocks[j].style.backgroundColor = "#58B7FF";
        blocks[j + 1].style.backgroundColor = "#58B7FF";
      }
  
      blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
    }
  }

  render() {
    return <section className="data-container" ref={this.container}></section>;
  }
}
*/


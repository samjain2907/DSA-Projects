/*
 * Created By Samarth Jain
 */

export { ChatHandler, chat_names };

const chat_names = [
  "Aman Gupta",
  "Pulkit Mittal",
  "Vaibhav",
  "Aditya",
  "Yash",
  "Samarth Jain",
  "Abhinav"
];
const chat_names_length = chat_names.length;
const chat_msg = [
  "Perfect, I am really glad to hear that! .......",
  "Sorry I don't have any information on that......",
  "It was as easy contest this time ......",
  "I will be submitting the work by ......."
];
const chat_msg_length = chat_msg.length;
const chat_img_length = 7;
// Main logic of the code

class ChatHandler {
  constructor(chat_template, chat_list) {
    this.hashmap = new Map();
    this.linkedlist = null;
    this.chat_template = chat_template;
    this.chat_list = chat_list;
    let clock = new Date();
    this.hours = clock.getHours();
    this.minutes = clock.getMinutes();
  }

  getTime() {
    //Time stamp creation for chat_template
    this.mins += 1;
    if (this.min === 60) {
      this.hours += 1;
      this.mins = 0;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }
    return ("0" + this.hours).slice(-2) + ":" + ("0" + this.mins).slice(-2);
  }
  createNode(id) {
    //creating node element
    let node = {};
    //We will implement a doubly linked list with reference to previous and next node.
    node["next"] = null;
    node["prev"] = null;
    let chat_item = this.chat_template.cloneNode(true);
    chat_item.querySelector("#Name").innerText =
      chat_names[id % chat_names_length];
    chat_item.querySelector("#Message").innerText =
      chat_msg[id % chat_msg_length];
    chat_item.querySelector("#Image").src =
      "./images/avatar" + eval(1 + (id % chat_img_length)) + ".png";
    node["chat_item"] = chat_item;
    return node;
  }
  newMsg(id) {
    let node = null;
    if (id in this.hashmap === false) {
      node = this.createNode(id);
      this.hashmap[id] = node;
    } else {
      node = this.getNodeFromList(id);
    }
    if (this.linkedlist === null) {
      this.linkedlist = node;
    } else {
      node["next"] = this.linkedlist;
      if (this.linkedlist !== null) this.linkedlist["prev"] = node;
      this.linkedlist = node;
    }
    this.updateList();
  }

  deleteMsg(id) {
    let node = this.getNodeFromList(id);

    delete this.hashmap[id];
    this.updateList();
  }

  getNodeFromList(id) {
    let node = this.hashmap[id];
    let prevNode = node["prev"];
    let nextNode = node["next"];

    if (prevNode !== null) prevNode["next"] = nextNode;
    if (nextNode !== null) nextNode["prev"] = prevNode;

    // Update Head of the Linked List
    if (node === this.linkedlist) {
      this.linkedlist = nextNode;
    }
    node["next"] = null;
    node["prev"] = null;
    return node;
  }

  updateList() {
    //Update the contents of the chat list
    let innerHTML = "";
    let head = this.linkedlist;
    while (head !== null) {
      let element = head["chat_item"];
      if (head === this.linkedlist) {
        element.className = "ks-item ks-active";
        element.querySelector("#Time").innerText = this.getTime();
      } else {
        element.className = "ks-item";
      }
      innerHTML += element.outerHTML;
      head = head["next"];
    }
    this.chat_list.innerHTML = innerHTML;
  }
}

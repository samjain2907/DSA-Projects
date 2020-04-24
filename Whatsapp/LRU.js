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
    //Time stamp creation for chat_tmeplate
    this.mins += 1;
    if (this.min === 60) {
      this.hours += 1;
    }
  }
}

var messages = [];
var id = 0;

module.exports = {
    
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push({id:id, text: text, time: time, name: name})
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
      let editID = req.params.id;
      var { text } = req.body;
      let index = messages.findIndex(message => message.id == editID)
      
      messages[index] = {
          id: messages.id,
          text: text,
          time: messages.time,
      }
      res.status(200).send(messages);
    },
    delete: (req, res) => {
        let deleteID = req.params.id;
        let index = messages.findIndex(message => message.id == deleteID)
        messages.splice(index, 1);
        res.status(200).send(messages);
    },

}
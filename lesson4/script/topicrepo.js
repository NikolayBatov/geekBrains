let cards = [];
let count = 1;

function addCard() {
    let name = document.addTopic.topicName.value;
    let description = document.addTopic.description.value;
    let urlPicture = document.addTopic.urlPaint.value;
    let urlSource = document.addTopic.urlSource.value;
    cards.push(new TopicCard(name, description, urlPicture, urlSource));
    showContent();
}

class TopicCard {
    constructor(nameTopic, description, urlPic, urlSource) {
        this._nameTopic = nameTopic;
        this._description = description;
        this._urlPic = urlPic;
        this._urlSource = urlSource;
        this._id = count++;
    }
}

function deleteCard(id) {

    let idCard = cards.findIndex(elem => elem._id === id);
    cards.splice(idCard, idCard);
    showContent();
}

function showContent() {
    let rootElem = document.getElementById('content');
    let elementsByName = document.getElementsByName('card');
    elementsByName.forEach(elem => {
        rootElem.removeChild(elem);
    });

    cards.forEach(elem => {
        let card = document.createElement('div');
        card.setAttribute('name', 'card');

        let name = document.createElement('p');
        name.innerText = elem._nameTopic;
        let desc = document.createElement('p');
        desc.innerText = elem._description;
        let urlPic = document.createElement('p');
        urlPic.innerText = elem._urlPic;
        let urlSrc = document.createElement('p');
        urlSrc.innerText = elem._urlSource;
        let del = document.createElement('input');
        del.setAttribute('type', 'button' );
        del.setAttribute('value', 'Delete' );
        del.setAttribute('onclick', `deleteCard(${elem._id})`);

        card.appendChild(name);
        card.appendChild(desc);
        card.appendChild(urlSrc);
        card.appendChild(urlPic);
        card.appendChild(del);

        rootElem.appendChild(card);
    });
}
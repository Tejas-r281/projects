const addbtn = document.querySelector('#add');
const maindiv = document.getElementById('realcontent')
const updateLSData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
    textAreaData.forEach((note) => {
        return notes.push(note.value);
    })
    // console.log(textAreaData);

    localStorage.setItem('notes', JSON.stringify(notes));

}

const addnewnote = (text = "") => {
    // console.log(text);
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData = `
         <div class="operation">
             <button class="edit"><i class="fa fas fa-edit"></i></button>
             <button class="delete"> <i class=" fa fa-trash"></i></button>
         </div>
     
     <div class="main ${text ? "" : "hidden"}"></div>
     <textarea  class="textarea ${text ? "hidden" : ""}  "></textarea>
`

    note.insertAdjacentHTML('afterbegin', htmlData);


    // getting refrences 

    const editButton = note.querySelector('.edit')
    const delbutton = note.querySelector('.delete');
    const maindive = note.querySelector('.main');
    const textarea = note.querySelector('textarea');
    textarea.value = text;
    maindive.innerHTML = text;

    if (maindive.innerHTML || (!textarea.value)) {
        //maindiv.appendChild(note);
    }
    maindiv.appendChild(note);

    delbutton.addEventListener('click', () => {
        note.remove();
        updateLSData();
    })
    editButton.addEventListener('click', () => {
        maindive.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })

    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        // console.log(value);
        maindive.innerHTML = value;

        updateLSData();
    })

}
const notes = JSON.parse(localStorage.getItem('notes'));
// console.log(notes);
if (notes) {
    notes.forEach((note, index, arr) => {
        if (note) {
            addnewnote(note)
        }
    }
    )

};

addbtn.addEventListener('click', () => addnewnote());
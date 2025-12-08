// API, use local host for JSON
const DATA_URL = 'pets.json';
const apiUrl = 'http://localhost:3000/pets.json';

// create a draggable card element for an item
function createCard(item) {
  const card = document.createElement('div');
  card.className = 'card';
  card.id = item.id;
  card.draggable = true;
  card.dataset.category = item.category;

  const img = document.createElement('img');
  img.src = `./images/${item.image_url}`; // updated for github pages
  img.alt = item.name;
 
  const txt = document.createElement('div');
  txt.className = 'title';
  txt.textContent = item.name;

  card.appendChild(img);
  card.appendChild(txt);

  card.addEventListener('dragstart', (e) => {
    console.log("Dragging card", item.id, item.category);
    e.dataTransfer.setData('application/json', JSON.stringify({ id: item.id, category: item.category }));
    e.dataTransfer.effectAllowed = 'move';
  });

  return card;
}

// setup dropzone behaviors (green for correct hover, red for incorrect)
function setupDropzone(dropZone) {
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault(); 
    try {
      // parse dragged data
      const data = JSON.parse(e.dataTransfer.getData('application/json') || '{}');
      console.log("Dragover:", data, "Dropzone accepts:", dropZone.dataset.accept);
      if (data.category === dropZone.dataset.accept) {
        dropZone.classList.add('correct-hover');
        dropZone.classList.remove('incorrect-hover');
      } else {
        dropZone.classList.add('incorrect-hover');
        dropZone.classList.remove('correct-hover');
      }
    } catch {
      dropZone.classList.remove('correct-hover', 'incorrect-hover');
    }
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('correct-hover', 'incorrect-hover');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('correct-hover', 'incorrect-hover');
    
    try {
      const data = JSON.parse(e.dataTransfer.getData('application/json') || '{}');
      if (data.category === dropZone.dataset.accept) {
        const card = document.getElementById(data.id);
        if (card) {
          dropZone.appendChild(card);
        }
      }
    } catch {
     
    }
  });
}

// fetch JSON, create mixed list, and attach dropzones
async function init() {
  const mixedItems = document.getElementById('mixed-items');
  const catsZone = document.getElementById('cats-zone');
  const dogsZone = document.getElementById('dogs-zone');

  setupDropzone(catsZone);
  setupDropzone(dogsZone);

  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error('Failed to load data');
    const data = await res.json();

    const catItems = data.categories.cats || [];
    const dogItems = data.categories.dogs || [];
    const combined = [...catItems, ...dogItems];


    combined.forEach(it => mixedItems.appendChild(createCard(it)));
  } catch (err) {
    mixedItems.textContent = 'Could not load items.';
    console.log(err);
  }
}
// ensure DOM is loaded before init runs
document.addEventListener('DOMContentLoaded', init);


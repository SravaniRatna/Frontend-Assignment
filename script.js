 const items = document.querySelectorAll('.item');
    const container2 = document.getElementById('container2');
    const successMessage = document.getElementById('successMessage');

    let draggedItem = null;

    // Add event listeners to items for drag and drop functionality
    items.forEach(item => {
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);
    });

    container2.addEventListener('dragover', dragOver);
    container2.addEventListener('dragenter', dragEnter);
    container2.addEventListener('dragleave', dragLeave);
    container2.addEventListener('drop', drop);

    function dragStart() {
      draggedItem = this;
      setTimeout(() => {
        this.classList.add('dragging');
      }, 0);
    }

    function dragEnd() {
      this.classList.remove('dragging');
    }

    function dragOver(e) {
      e.preventDefault();
    }

    function dragEnter(e) {
      e.preventDefault();
      this.classList.add('highlight');
    }

    function dragLeave() {
      this.classList.remove('highlight');
    }

    function drop() {
      this.classList.remove('highlight');
      this.appendChild(draggedItem);
      successMessage.style.display = 'block';
      successMessage.innerText = 'Item dropped successfully!';
    }

function reset() {
      container2.innerHTML = '';
      successMessage.style.display = 'none';
      container1.innerHTML = `
        <div class="item" draggable="true">Item 1</div>
        <div class="item" draggable="true">Item 2</div>
        <div class="item" draggable="true">Item 3</div>
      `;

      items.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragend', dragEnd);
      });
    }

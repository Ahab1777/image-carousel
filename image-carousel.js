

export default class ImageCarousel {
    constructor(arrayOfImagePaths, currentImageIndex = 0, width, height) {
        this.arrayOfImagePaths = arrayOfImagePaths;
        this.currentImageIndex = currentImageIndex;
        this.width = width;
        this.height = height;
        this.startTimer();
    }
    
  
    renderCarousel() {
        //carousel container div
        const carouselContainer = document.createElement('div');
        carouselContainer.style.width = this.width;
        carouselContainer.style.height = this.height;
        carouselContainer.style.overflow = 'hidden';
        carouselContainer.style.display = 'flex';
        
        //create img element
        const currentImage = document.createElement('img');
        currentImage.src = this.arrayOfImagePaths[this.currentImageIndex];
        currentImage.style.objectFit = 'contain';
        currentImage.style.maxHeight = '100%';
        carouselContainer.appendChild(currentImage);
        //for nextImage and previousImage functions
        this.imageElement = currentImage;
        
        //buttons positioning
        carouselContainer.style.position = 'relative';
        //next button
        const nextButton = document.createElement('button');
        nextButton.textContent = '>';
        nextButton.style.width = '50px';
        nextButton.style.height = '50px';
        nextButton.style.position = 'absolute';
        nextButton.style.right = '10px';
        nextButton.style.top = '50%';
        nextButton.style.transform = 'translateY(-50%)';
        carouselContainer.appendChild(nextButton);
        
        //left button
        const previousButton = document.createElement('button');
        previousButton.textContent = '<';
        previousButton.style.width = '50px';
        previousButton.style.height = '50px';
        previousButton.style.position = 'absolute';
        previousButton.style.left = '10px';
        previousButton.style.top = '50%';
        previousButton.style.transform = 'translateY(-50%)';
        carouselContainer.appendChild(previousButton);
        
        //button logic
        nextButton.addEventListener('click', () => this.nextImage());
        previousButton.addEventListener('click', () => this.previousImage());

        //navigation dots
        const dotsContainer = document.createElement('div');
        dotsContainer.style.position = 'absolute';
        dotsContainer.style.bottom = '10px';
        dotsContainer.style.left = '50%';
        dotsContainer.style.transform = 'translateX(-50%)';
        for (let i = 0; i < this.arrayOfImagePaths.length; i++) {
            const navigationDot = document.createElement('span');
            navigationDot.classList.add('dot');
            navigationDot.style.width = '10px';
            navigationDot.style.height = '10px';
            navigationDot.style.borderRadius = '50%';
            navigationDot.style.backgroundColor = 'gray';
            navigationDot.style.display = 'inline-block';
            navigationDot.style.margin = '0 5px';
            navigationDot.dataset.index = i;
            navigationDot.style.border = '1px solid black';
            if (i === this.currentImageIndex) {
                navigationDot.style.backgroundColor = 'white';
            }
           
            navigationDot.addEventListener('click', (event) => {
                const targetIndex = parseInt(event.target.dataset.index);
                this.changeImage(targetIndex);
                this.currentImageIndex = targetIndex;
            });
            
                    
            dotsContainer.appendChild(navigationDot);
        }
                
        this.dotsArray = dotsContainer.querySelectorAll('.dot');

        
        carouselContainer.appendChild(dotsContainer);

        return carouselContainer;
    }

    //change img.src and dot color
    changeImage(targetIndex) {
        this.imageElement.src = this.arrayOfImagePaths[targetIndex];
        this.dotsArray.forEach(dot => {
            dot.style.backgroundColor = 'gray';
        });
        this.dotsArray[targetIndex].style.backgroundColor = 'white';
    }
        

    //add one to currentImageIndex
    nextImage() {
        this.currentImageIndex++;
        if (this.currentImageIndex >= this.arrayOfImagePaths.length) {
            this.currentImageIndex = 0;
        }
        console.log(this.currentImageIndex);
        this.changeImage(this.currentImageIndex)
    }

    //subtract one from currentImageIndex
    previousImage() {
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.arrayOfImagePaths.length - 1;
        }
        console.log(this.currentImageIndex);
        this.changeImage(this.currentImageIndex)
    }

    //start timer
    startTimer() {
        setInterval(() => {
            this.nextImage();
        }, 5000);
    }
}
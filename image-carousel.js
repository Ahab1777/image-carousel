

export default class ImageCarousel {
    constructor(arrayOfImagePaths, currentImageIndex = 0, width, height) {
        this.arrayOfImagePaths = arrayOfImagePaths;
        this.currentImageIndex = currentImageIndex;
        this.width = width;
        this.height = height;
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
        
        //buttons
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
        
        return carouselContainer;
    }

    //change img src
    changeImage() {
        this.imageElement.src = this.arrayOfImagePaths[this.currentImageIndex];
    }
        

    //add one to currentImageIndex
    nextImage() {
        this.currentImageIndex++;
        if (this.currentImageIndex >= this.arrayOfImagePaths.length) {
            this.currentImageIndex = 0;
        }
        console.log(this.currentImageIndex);
        this.changeImage()
    }

    //subtract one from currentImageIndex
    previousImage() {
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.arrayOfImagePaths.length - 1;
        }
        console.log(this.currentImageIndex);
        this.changeImage()
    }

    
}
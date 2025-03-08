

export default class ImageCarousel {
    constructor(arrayOfImagePaths, currentImageIndex = 0, width, height) {
        this.arrayOfImagePaths = arrayOfImagePaths;
        this.currentImageIndex = currentImageIndex;
        this.width = width;
        this.height = height;
    }

   renderCarousel(parentContainerId) {
        const parentContainer = document.getElementById(parentContainerId);        

        const carouselContainer = document.createElement('div');
        carouselContainer.style.width = this.width;
        carouselContainer.style.height = this.height;
        carouselContainer.style.overflow = 'hidden';
        carouselContainer.style.display = 'flex';

        this.arrayOfImagePaths.forEach((imagePath, index) => {
            const image = document.createElement('img');
            image.src = imagePath;
            const imageDiv = document.createElement('div');
            imageDiv.dataset.index = index;
            imageDiv.appendChild(image);
            carouselContainer.appendChild(imageDiv);
        
        });

        parentContainer.appendChild(carouselContainer);

        return parentContainer;
}

}
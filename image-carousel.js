

export default class ImageCarousel {
    constructor(images, currentImageIndex ) {
        this.images = images;
        this.currentImageIndex = currentImageIndex;

    }

    nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }

}
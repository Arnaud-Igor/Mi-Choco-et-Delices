import { Component } from '@angular/core';
import { TestimonialItem } from 'src/app/interfaces/testimonials/testimonial-item';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
  testimonialItems: TestimonialItem[] = [
    {
      testimonial:
        'Enfin un chocolat noir qui tient ses promesses ! L’intensité du cacao est parfaite, sans être trop amer. On sent vraiment la qualité des fèves.',
      profilePicture:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
      witnessName: 'Micheal Gough',
      workTitle: 'CEO d’une startup fintech',
    },
    {
      testimonial:
        'J’utilise cette poudre de cacao pour mes desserts et mes chocolats chauds maison, et le goût est juste incroyable ! Sans amertume excessive, et totalement naturelle. Je ne peux plus m’en passer !',
      profilePicture:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
      witnessName: 'John Doe',
      workTitle: 'Freelance & utilisateur satisfait',
    },
    {
      testimonial:
        'Une vraie pépite ! La texture est ultra-onctueuse et le goût du chocolat au lait est parfaitement équilibré. J’adore l’étaler sur mes tartines ou l’utiliser dans mes pâtisseries.',
      profilePicture:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
      witnessName: 'Micheal Gough',
      workTitle: 'CEO',
    },
    {
      testimonial:
        'Non seulement le chocolat est d’une qualité exceptionnelle, mais la livraison a été rapide et soignée. Les produits sont bien emballés et conservent toute leur saveur.',
      profilePicture:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
      witnessName: 'John Doe',
      workTitle: 'CFO d’une PME tech',
    },
  ];
}

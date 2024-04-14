import { Component } from '@angular/core';
import { Itestimonials } from '../Itestimonials';
import { testimonials } from '../testimonials';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonialItems: Itestimonials[] = [];
  testimonials!: Itestimonials;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    this.testimonialItems = testimonials;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  FoodDetails=[
    {'id':1,
    'name':'Protein Salad',
    'description':'High protein salad basically a combination of vegetables, lentils, pulses, spices with a unique flavoured sauce.',
    'price':'70',
    'image':'../../assets/image/protein salad.jpg'},

    {'id':2,
    'name':'Cheese Pizza',
    'description':'Yearning for a cheesy delight? Then we have an easy cheese pizza recipe to add soul to your weekend binging!',
    'price':'350',
    'image':'../../assets/image/cheese pizza.jpg'},

    {'id':3,
    'name':'Paneer Gnochi',
    'description':'The cheesy flavor of the paneer compliments the taste and texture of the Garlic Gnocchi. ',
    'price':'280',
    'image':'../../assets/image/paneer gnocchi.jpg'},

    {'id':4,
    'name':'Butter Chicken',
    'description':'Butter Chicken simmers in a buttery tomato sauce and is punctuated by several special spices and herbs',
    'price':'370',
    'image':'../../assets/image/butter chicken.jpg'},

    {'id':5,
    'name':'Cold Coffee',
    'description':'Cold Coffee , with milk and sugar',
    'price':'80',
    'image':'../../assets/image/cold coffee.jpg'},

    {'id':6,
    'name':'Ice-cream',
    'description': 'Ice cream , It contains milk products, sweetening materials, stabilizers, colors, flavors, and egg products.',
    'price':'100',
    'image':'../../assets/image/ice cream.jpg'}, 
  ]
}

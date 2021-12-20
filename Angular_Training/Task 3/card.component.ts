import { Component, OnInit } from '@angular/core';
import { Images } from '../Models/Image';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent 
{
  public cardArray:Images[]  = [
    {image:"assets/Images/Angular.png", content : "Angular", desc:"Web Framework"},
    {image:"assets/Images/React.png", content : "React", desc:"Web Framework"},
    {image:"assets/Images/HTML.png", content : "HTML", desc:"Web Framework"},
    {image:"assets/Images/CSS.png", content : "CSS", desc:"Web Framework"},
    {image:"assets/Images/JS.png", content : "JavaScript", desc:"Web Framework"},
    {image:"assets/Images/TS.png", content : "TypeScript", desc:"Web Framework"},
    {image:"assets/Images/fire.png", content : "Firefox", desc:"Web Browser"},
    {image:"assets/Images/chrome.png", content : "Chrome", desc:"Web Browser"}


    
  ];
}
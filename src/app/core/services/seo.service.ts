import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'
import { OpenGraph } from '../models/opengraph.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title,private meta: Meta) { }

  updateTitle(name: string) {
    this.title.setTitle(name)
  }
  updateDescription(desc: string) {
    this.meta.updateTag({name:'description',content: desc})
  }
  updateOpenGraph(graph: OpenGraph) {
    this.meta.updateTag({name: "og:url", content: graph.url})
    this.meta.updateTag({name: "og:type", content: graph.type})
    this.meta.updateTag({name: "og:title", content: graph.title})
    this.meta.updateTag({name: "og:description", content: graph.description})
    this.meta.updateTag({name: "og:image", content: graph.image})
  }
}

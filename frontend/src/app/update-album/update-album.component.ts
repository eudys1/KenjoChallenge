import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-album',
  templateUrl: './update-album.component.html',
  styleUrls: ['./update-album.component.scss']
})

export class UpdateAlbumComponent implements OnInit {

  album = {
    title:this.data.title, /* recovering information from "data"  */
    year: this.data.year,
    artist: this.data.artist,
    photoUrl: this.data.photoUrl,
    score: this.data.score
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {}

   updateAlbum(album: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.put<any>(`http://localhost:3000/album/${this.data._id}`, JSON.stringify(album), httpOptions).subscribe(() => {
      window.location.reload();
    }); 
  }

}

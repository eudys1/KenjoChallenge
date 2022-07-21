import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UpdateAlbumComponent } from "../update-album/update-album.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
	selector: "album-list",
	templateUrl: "./album-list.component.html",
	styleUrls: ["./album-list.component.scss"],
})
export class AlbumListComponent implements OnInit {
	albumList: Array<any> = [];
	isLoading: boolean = true;

	constructor(private http: HttpClient, public dialog: MatDialog) {}

	ngOnInit(): void {
		this.http
			.get<any[]>("http://localhost:3000/album")
			.subscribe((data: Array<any>) => {
				// this.albumList = data;
				this.albumList.push(data);
				this.isLoading = false;
				console.log(this.albumList);
			});
	}


	openModalToUpdateAlbum(album: any, i: any) {
		this.dialog.open(UpdateAlbumComponent, { data: this.albumList[i] });
	}


	deleteAlbum(album: any, i: number) {
		this.http
			.delete(`http://localhost:3000/album/${album._id}`)
			.subscribe();
		this.albumList.splice(i, 1);
	}
}

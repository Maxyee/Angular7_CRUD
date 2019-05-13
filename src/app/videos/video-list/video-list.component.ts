import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/video.service';
import { Video } from 'src/app/shared/video.model';
import { ToastrService } from 'ngx-toastr';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  constructor(private service:VideoService, private toastr: ToastrService, private embedService:EmbedVideoService) { }

  ngOnInit() {
      this.service.refreshList()
  }

  populateForm(vid : Video){
      this.service.formData = Object.assign({},vid);
  }

  onDelete(id : number){
    if(confirm('Are you sure to delete it??')){
      this.service.deleteVideo(id).subscribe(res=>{
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'VID. Deleted')
        });
    }

  }




}

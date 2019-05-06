import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/video.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private service: VideoService, private toastr: ToastrService ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();

    this.service.formData = {
      video_title: '',
      video_description: '',
      categories: '',
      created_at: null,
      updated_at: null,
      user: null,
    }
  }

  onSubmit(form: NgForm){
    this.insertRecord(form);
  }

  insertRecord(form: NgForm){
      this.service.postVideo(form.value).subscribe(res => {
          this.toastr.success("Inserted Successfully",'VID. Add')
          this.resetForm(form);
      });
  }

}

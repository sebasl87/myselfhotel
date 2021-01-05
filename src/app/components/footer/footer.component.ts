import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { AuthService } from "src/app/services/auth.service";
import { ModalController } from "@ionic/angular";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor(
    private storage: Storage,
    private authSvc: AuthService,
    private modal: ModalController,
    private userSvc: UserService
  ) {}

  private hayUID: any;

  ngOnInit() {
    this.authSvc.getUserAuth().subscribe((user) => {
      this.hayUID = user.uid;
    });
  }
}

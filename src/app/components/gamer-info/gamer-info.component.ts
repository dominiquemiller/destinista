import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Gamer } from '../../models/gamer.interface';
import { Network } from '../../models/network.enum';

@Component({
    selector: 'app-gamer-info',
    styleUrls: ['gamer-info.component.scss'],
    templateUrl: 'gamer-info.component.html'
})

export class GamerInfoComponent implements OnInit {
    @Output()
    submitted: EventEmitter<any> = new EventEmitter<any>();
    form: FormGroup
    network = Network;

    constructor( private fb: FormBuilder ) {
        this.createGroup();
    }

    ngOnInit() {
     }

    createGroup() {
        this.form = this.fb.group({
            network: ['', Validators.required],
            tag: ['', Validators.required]
        });
    }

    formSubmit(value, valid) {
        if (valid) {
          this.submitted.emit(value);
        }
    }
}

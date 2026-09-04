import { Component } from '@angular/core';

import {
  LucideBookOpen,
  LucideCloud,
  LucideCode2,
  LucideMonitorSmartphone,
} from '@lucide/angular';

@Component({
  standalone: true,

  imports: [
    LucideCode2,
    LucideCloud,
    LucideMonitorSmartphone,
    LucideBookOpen,
  ],

  selector: 'app-about',

  styleUrl: './about.css',

  templateUrl: './about.html',
})

export class About {}
import { Component } from '@angular/core';
import { AdminService } from '../../services/serviceapi.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  newAdmin: any = {}; // Initialize newAdmin as an empty object
  admins: any[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins(): void {
    this.adminService.getAllAdmins().subscribe(
      (data: any[]) => {
        this.admins = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addAdmin(): void {
    this.adminService.saveAdmin(this.newAdmin).subscribe(
      (data: any) => {
        console.log('Admin added successfully:', data);
        this.loadAdmins(); // Refresh the list after adding a new admin
        this.newAdmin = {}; // Reset the newAdmin object after saving
      },
      (error: any) => {
        console.error('Error adding admin:', error);
      }
    );
  }

  deleteAdmin(adminId: number): void {
    // Implement the logic to delete an admin by adminId
    // Call the necessary service method to delete the admin
    // Reload the list after deletion
  }
}
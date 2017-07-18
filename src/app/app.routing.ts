// Modules
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { VideosComponent } from "./components/videos/videos.component";
import { VideoComponent } from "./components/video/video.component";

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'videos',
    },
    {
        path: 'videos',
        component: VideosComponent
    },
    {
        path: 'video/:id',
        component: VideoComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

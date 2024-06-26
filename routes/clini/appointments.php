<?php

use App\Http\Controllers\Clini\Appointments\GetAppointmentsController;
use App\Http\Controllers\Clini\Appointments\GetClosestAppointmentController;
use App\Http\Controllers\Clini\Appointments\ShowAppointmentController;
use App\Http\Controllers\Clini\Appointments\StoreAppointmentController;
use App\Http\Controllers\Clini\Appointments\UpdateAppointmentController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/appointments/closest', GetClosestAppointmentController::class)->name('closest');
    Route::get('/appointments', GetAppointmentsController::class)->name('index');
    Route::post('/appointments', StoreAppointmentController::class)->name('index');
    Route::patch('/appointments/{appointment}', UpdateAppointmentController::class)->name('update');
    Route::get('/appointments/{appointment}', ShowAppointmentController::class)->name('show');
})->as('appointment.');

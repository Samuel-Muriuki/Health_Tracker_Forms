from django.urls import path
from . import views

urlpatterns = [
    path('api/data/', views.data_list),
    path('api/data/<int:pk>/', views.data_detail),
    # path('api/data/published/', views.data_list_published),
    path('api/lab/', views.lab_list),
    path('api/lab/<int:pk>/', views.lab_detail),
    # path('api.lab/published/', views.lab_list_published),
]
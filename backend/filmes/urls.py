from django.urls import path
from . import views


urlpatterns = [
    path('', views.ListCreateFilmeAPIView.as_view(), name='get_post_filmes'),
    path('<int:pk>/', views.RetrieveUpdateDestroyFilmeAPIView.as_view(), name='get_delete_update_filme'),
]
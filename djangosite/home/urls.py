from django.urls import path

from .views import *

urlpatterns = [
    path('', home),
    path('shoppinglists/', ShoppingList.as_view()),
    path('shoppinglists/<int:pk>/', ShoppingDetail.as_view()),
]

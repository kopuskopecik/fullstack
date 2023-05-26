from django.shortcuts import render
from rest_framework import generics
from .serializers import ShoppingSerializer

from .models import Shopping

# Create your views here.
def home(request):
    context = {
        'foo': "bar"
    }
    return render(request, "index.html", context)


class ShoppingList(generics.ListCreateAPIView):
    queryset = Shopping.objects.all()
    serializer_class = ShoppingSerializer


class ShoppingDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shopping.objects.all()
    serializer_class =ShoppingSerializer

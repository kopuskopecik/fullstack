from django.shortcuts import render

# Create your views here.
def home(request):
    context = {
        'foo': "bar"
    }
    return render(request, "index.html", context)
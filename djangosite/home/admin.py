from django.contrib import admin
from home.models import Shopping


class ShoppingAdmin(admin.ModelAdmin):
    list_display  = ["item", "amount", 'status']


admin.site.register(Shopping,ShoppingAdmin)
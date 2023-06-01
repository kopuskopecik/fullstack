from django.db import models

# Create your models here.


class Shopping(models.Model):
    item = models.CharField(max_length=30)
    amount = models.CharField(max_length=30, default = 10)
    status = models.BooleanField(default=False)
    
    class Meta:
        ordering = ["status"]

    def __str__(self):
        return self.item
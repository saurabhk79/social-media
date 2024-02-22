from django.contrib import admin

# Register your models here.
from .models import SocialMediaPost, Analytics

admin.site.register(SocialMediaPost)
admin.site.register(Analytics)
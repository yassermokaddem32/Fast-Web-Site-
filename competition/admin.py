from django.contrib import admin
from .models import Team


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'score', 'stage', 'group')
    list_filter = ('stage', 'group')
    search_fields = ('name',)

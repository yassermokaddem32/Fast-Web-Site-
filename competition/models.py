from django.db import models


class Team(models.Model):
    STAGE_CHOICES = [
        ('group', 'Group Stage'),
        ('quarter', 'Quarter Final'),
        ('semi', 'Semi Final'),
        ('final', 'Final'),
    ]

    name = models.CharField(max_length=100)
    score = models.FloatField(default=0)
    stage = models.CharField(max_length=20, choices=STAGE_CHOICES)
    group = models.CharField(max_length=10)  # A, B, C, D, Q1, Q2, S1, S2, F

    class Meta:
        ordering = ['-score']

    def __str__(self):
        return f"{self.name} ({self.group})"

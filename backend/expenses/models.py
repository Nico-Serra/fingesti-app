from django.db import models

class Expense(models.Model):
    CATEGORY_CHOICES = [
        ('Cibo', 'Cibo'),
        ('Trasporti', 'Trasporti'),
        ('Intrattenimento', 'Intrattenimento'),
        ('Bollette', 'Bollette'),
        ('Altro', 'Altro'),
    ]

    name = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    date = models.DateField(auto_now_add=True)  # Data automatica ma modificabile

    def __str__(self):
        return f"{self.name} - {self.amount}€ ({self.category})"

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExpenseViewSet

router = DefaultRouter()
router.register(r'expenses', ExpenseViewSet)  # Questo crea tutte le rotte per CRUD

urlpatterns = [
    path('', include(router.urls)),
]

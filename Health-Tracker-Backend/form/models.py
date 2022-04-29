from django.db import models

# Create your models here.

class Data(models.Model):
    first_name = models.CharField(max_length=255, blank=False, default='')
    last_name = models.CharField(max_length=255, blank=False, default='')
    age = models.IntegerField(blank=False, default=1)
    gender = models.CharField(max_length=7, blank=False, default='')
    signs_and_symptoms = models.CharField(max_length=255, blank=False, default='')
    patient_type = models.CharField(max_length=10, blank=False, default='')
    
    def __str__(self): 
        return self.first_name
    def __str__(self):
        return self.last_name
    def __str__(self):
        return self.age
    def __str__(self): 
        return self.gender 
    def __str__(self):
        return self.signs_and_symptoms
    def __str__(self):
        return self.patient_type
    
class Lab(Data):
    sample_number = models.ForeignKey(Data, on_delete=models.CASCADE, related_name='labform')
    condition = models.CharField(max_length=255, blank=False, default='')
    test = models.CharField(max_length=255, blank=False, default='')
    disease_found = models.CharField(max_length=255, blank=False, default='')
    
    def __str__(self):
        return self.sample_number
    def __str__(self):
        return self.condition
    def __str__(self):
        return self.test
    def __str__(self):
        return self.disease_found
from django.db import models

# Create your models here.
class StudentMarks(models.Model):

    student_name = models.CharField(max_length = 200)   
    student_roll_number = models.CharField(max_length = 200) 
    phy_marks = models.IntegerField() 
    chem_marks = models.IntegerField() 
    math_marks = models.IntegerField() 
    total_marks = models.FloatField() 
    percentage = models.FloatField()

    def __str__(self):
        return (self.student_name)

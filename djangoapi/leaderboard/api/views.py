from django.shortcuts import render
from django.http import JsonResponse
from .models import *

from django.core.serializers import serialize
import json

from django.views.decorators.csrf import csrf_exempt
# Create your views here.

def marks(request):

    data_to_send = StudentMarks.objects.all()
    print(data_to_send)

    permission_serialize = json.loads(serialize('json', data_to_send ))

 
    responseData = {
        'data_to_send' : permission_serialize
    }

    return JsonResponse(responseData , safe=False)


@csrf_exempt
def entermarks(request):

    if(request.method == 'POST'):
        print(request.POST)

        name_form = request.POST.get('name') 
        roll_form = request.POST.get('roll' )
        phy_form = request.POST.get('phy' )
        chem_form = request.POST.get('chem' ) 
        math_form = request.POST.get( 'math' )

        total_marks_form = int(phy_form) + int(chem_form) + int(math_form)

        model_save = StudentMarks( student_name = name_form , student_roll_number = roll_form ,
                phy_marks = phy_form ,chem_marks = chem_form ,  math_marks  = math_form , total_marks = total_marks_form ,
                  percentage = round( total_marks_form /3 , 2)  )
        model_save.save()

        
        responseData = {
            'msg' : "New Entry Added"
        }

        return JsonResponse(responseData , safe=False)